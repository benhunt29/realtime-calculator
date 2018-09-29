import Pusher from 'pusher-js'
import { PUSHER_APP_KEY, PUSHER_CLUSTER } from '../constants'

export const getPusher = () => {
  return new Pusher(PUSHER_APP_KEY, {
    cluster: PUSHER_CLUSTER,
    forceTLS: true
  })
}

export const subscribe = (channel, event, cb) => {
  const pusher = getPusher()
  return pusher.subscribe(channel).bind(event, cb)
}
