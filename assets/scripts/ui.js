'use strict'

const store = require('./store.js')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up Successfully! Please log in to Play!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign Up Failed, Please try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#new-game').removeClass('hidden')
  $('.new-game-results').removeClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#index-games').removeClass('hidden')
  $('#show-game').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('.welcome').addClass('hidden')
  $('#message').text('Signed In, Welcome Back!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  console.log('store is', store)
  store.user = responseData.user
}
const onSignInFailure = responseData => {
  $('#message').text('Sign In Failed, Please try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

const onChangePWSuccess = responseData => {
  $('#message').text('Password Changed Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onChangePWFailure = responseData => {
  $('#message').text('Password not Changed, please try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

const onSignOutSuccess = responseData => {
  $('.container, #new-game').addClass('hidden')
  $('.new-game-results').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('.welcome').removeClass('hidden')
  $('#show-game').addClass('hidden')
  $('#index-games').addClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#message').text('Sign Out Successfull! Come Back Soon!')
  $('#current-turn').text('')
  $('#game-index').text('')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onNewGameSuccess = responseData => {
  store.game = responseData.game
  console.log('store is', store)
}

const onIndexSuccess = responseData => {
  $('#game-index').html('')
  if (responseData.games.length > 0) {
    const allGamesLength = responseData.games.length
    $('#game-index').append(`You've Played ${allGamesLength} Games!`)
    $('#message').text('Success! Your Info is Below')
    $('#message').removeClass()
    $('#message').addClass('success')
  } else {
    $('#message').text('No Games to Display! Play Some First :)')
    $('#message').removeClass()
    $('#message').addClass('warning')
    $('form').trigger('reset')
  }
}

const onShowSuccess = responseData => {
  $('#game-index').html('')
  const games = responseData.game
  const gameIndex = `
      <p>ID: ${games.id}</p>
      <p>Game:
      <br>${games.cells[0]} ${games.cells[1]} ${games.cells[2]}
      <br> ${games.cells[3]} ${games.cells[4]} ${games.cells[5]}
      <br> ${games.cells[6]} ${games.cells[7]} ${games.cells[8]}</p>
      <p>Game Finished?: ${games.over}</p>
      <p>Player ID: ${games.player_x.id}</p>
      <p>Player Email: ${games.player_x.email}</p>
      <hr>`
  $('#game-index').html(gameIndex)
  $('#message').text('Success! Your Game is Below')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onShowFailure = responseData => {
  $('#message').text('Invalid ID, Please Try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

const onUpdateSuccess = responseData => {
  $('#message').text('')
  $('#message').removeClass()
  $('form').trigger('reset')
  store.game = responseData.game
  console.log(store.game)
  console.log(responseData, 'successful patch!')
}

//   let storeData = responseData.store.game
//   console.log(storeData)
// }

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePWSuccess,
  onSignOutSuccess,
  onChangePWFailure,
  onSignInFailure,
  onSignUpFailure,
  onNewGameSuccess,
  onIndexSuccess,
  onShowSuccess,
  onShowFailure,
  onUpdateSuccess
}
