
import { createPosition } from './helper.jsx';

export const initGameState = {
  position : [createPosition()],
  turn: 'w',
  candidateMoves : []
}
