import { io, Socket } from "socket.io-client";

const BASE_URL = "http://localhost:3000";
// const SOCKET_ENDPOINT = "/waitingroom";

const createSocket = (): Socket => {
    return io(BASE_URL, {
        transports: ["websocket", "polling"],
    });
  }

export { createSocket };