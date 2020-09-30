let h1 = document.querySelector("h1")



setTimeout(function() {
  h1.innerHTML = "10"
  
  setTimeout(function() {
    h1.innerHTML = "9"

    setTimeout(function() {
      h1.innerHTML = "8"

      setTimeout(function() {
        h1.innerHTML = "7"

        setTimeout(function() {
          h1.innerHTML = "6"

          setTimeout(function() {
            h1.innerHTML = "5"

            setTimeout(function() {
              h1.innerHTML = "4"

              setTimeout(function() {
                h1.innerHTML = "3"

                setTimeout(function() {
                  h1.innerHTML = "2"

                  setTimeout(function() {
                    h1.innerHTML = "1"

                    setTimeout(function() {
                      h1.innerHTML = "Good Morning!"
                    }, 1000)

                  }, 1000)

                }, 1000)

              }, 1000)

            }, 1000)

          }, 1000)
        }, 1000)

      }, 1000)

    }, 1000)

  }, 1000)

}, 1000)
