const API = "https://api.themoviedb.org/3";

export function get (path) {
    return fetch(API + path, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGNhMDQwNWVhODA1MTEyZTAyYjgyN2U5YzQ3YjZmMSIsIm5iZiI6MTcyOTQ3ODI2Ny4zODIwMzUsInN1YiI6IjY3MTU3NGFlY2VmMTQ2MjhmZWY1ZjgwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIciH9TCDdIGWFZ5J_4vVDIQld07Bmw4X3wnw5SXMn4",
          "Content-Type": "application/json;charset=utf-8"
        }
      }).then(result => result.json())
}