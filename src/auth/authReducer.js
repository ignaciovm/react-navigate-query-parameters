export const types = {
  LOGIN: '[AUTH] LOGIN',
  LOGOUT: '[AUTH] LOGOUT',
}

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...action.payload,
        logged: true
      }
    case types.LOGOUT:
      return {
        logged: false
      }
    default:
      return state
  }
}
