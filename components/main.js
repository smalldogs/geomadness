import geo from 'geolib'
import schools from './schools'
import map from './map'
import flatten from 'lodash.flattendeep'

map.render(() => map.drawCircles(flatten(schools)), 'schools')

function fetchData(url) {
  if (!url) return alert('A Valid URL is Required')

  const http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (http.readyState !== 4) return false

    if (http.status === 200) {
      return document.querySelector('#geopoints').value = http.responseText
    }

    alert(http.statusText)
  }

  http.open('GET', url, true)
  http.send(null)
}

document.querySelector('#fetch').onclick = function() {
  fetchData(document.querySelector('input[name="url"]').value)
}

for (let link of document.querySelectorAll('.sample')) {
  link.onclick = function(e) {
    e.preventDefault()

    fetchData(this.getAttribute('href'))

    return false
  }
}

document.querySelector('#current-location').onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    document.querySelector('#geopoints').value = `[{"name":"You","latitude":"${position.coords.latitude}","longitude":"${position.coords.longitude}"}]`
  })
}

function addToList(selector, team) {
  let list = document.querySelector(selector)

  let el = document.createElement('div')
  el.innerHTML = `${team.rank}. ${team.name}<div class="explain">${team.nearest.name} - ${team.nearest.distance}</div>`

  list.appendChild(el)
}

document.querySelector('#run').onclick = function() {
  this.innerHTML = 'Calculating....'

  let data = document.querySelector('#geopoints').value

  try {
    data = JSON.parse(data)
  } catch (e) {
    return alert('Invalid JSON for GeoPoints')
  }

  data = data.map(el => {
    return {
      name: el.name || '',
      latitude: el.lat || el.latitude,
      longitude: el.lng || el.longitude,
    }
  })

  map.drawCircles(data, 'others', '#983c3c')

  for (let conference of schools) {
    for (let region of conference) {
      for (let school of region) {
        // Earth circumference is ~40m meters, furthest a point could be is half that
        school.nearest = {
          distance: 20037500,
        }

        for (let point of data) {
          const distance = geo.getDistance(point, school)

          if (school.nearest.distance > distance) {
            school.nearest = {
              name: point.name,
              distance,
            }
          }
        }
      }
    }
  }

  let reg = [
    'south',
    'west',
    'east',
    'midwest'
  ]

  // Now, we fight
  let matchups = [
    0, 15,
    7, 8,
    4, 11,
    3, 12,
    2, 13,
    5, 10,
    6, 9,
    1, 14,
  ]

  let count = -1
  for (let conference of schools) {
    for (let region of conference) {
      count++

      for (let n in matchups) {
        let position = matchups[n]
        region[position].rank = position + 1

        addToList(`#${reg[count]}-1`, region[position])
      }

      // sort the teams by matchup
      region.sort((a,b) => matchups.indexOf(a.rank - 1) - matchups.indexOf(b.rank -1))
    }
  }

  let status = document.querySelector('#status')

  // in the first round, use the specified matchups, in later rounds, play nearest neighbor
  count = -1
  for (let round = 2; round < 6; round++) {
    for (let conference of schools) {
      for (let t in conference) {
        let region = conference[t]

        count++

        status.innerHTML = `Processing ${reg[count]} round ${round}...`

        let losers = []
        for (let i = 0; i < region.length; i += 2) {
          let iCloser = region[i].nearest.distance < region[i + 1].nearest.distance
          region[i].winner = iCloser
          region[i + 1].winner = !iCloser
        }

        // reset array indecies
        region = conference[t] = region.filter((el) => el.winner)

        for (let winner of region) {
          addToList(`#${reg[count]}-${round}`, winner)
        }
      }
    }
    count = -1
  }

  // finals time
  let finals = []
  for (let conference of schools) {
    for (let region of conference) {
      addToList('#finals-1', region[0])
    }

    let winner = conference.reduce((a, b) => a[0].nearest.distance < b[0].nearest.distance ? a[0] : b[0])

    addToList('#finals-2', winner)

    finals.push(winner)
  }

  let winner = finals.reduce((a, b) => a.nearest.distance < b.nearest.distance ? a : b)
  status.innerHTML = `The winner is <strong>${winner.name}</strong>`
  addToList(`#finals-3`, winner)

  this.innerHTML = 'Run'
}
