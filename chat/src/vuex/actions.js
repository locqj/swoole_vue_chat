export default {
  setConn : ({ dispatch }, conn) => {
      dispatch('SET_CONN', conn);
      console.log(conn)
  },
  testa : () => {
    console.log('test');
  }
};
