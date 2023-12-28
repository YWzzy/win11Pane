const defState = {
  actions: [
    {
      ui: true,
      src: "wifi",
      name: "WiFi",
      state: "network.wifi.state",
      action: "STNGTOGG",
    },
    {
      ui: true,
      src: "bluetooth",
      name: "Bluetooth",
      state: "devices.bluetooth",
      action: "STNGTOGG",
    },
  ],
  hide: true,
  banhide: true,
  calhide: true,
};

const paneReducer = (state = defState, action) => {
  if (action.type == "PANETHEM") {
    var tmpState = { ...state };
    tmpState.actions[4].src = action.payload;
    return tmpState;
  } else if (action.type == "PANERIGHTTOGG") {
    return { ...state, hide: !state.hide };
  } else {
    return state;
  }
};

export default paneReducer;
