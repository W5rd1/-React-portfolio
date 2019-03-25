import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID be7a63d8d4f372525ecb8235d981bd86101b35ba1911cfab94763f62479b4518"
  }
});
