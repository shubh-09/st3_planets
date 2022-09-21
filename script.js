        function Weight() {
            let weight = document.getElementById("inputWeight").value;
            let mercury = weight * 0.37;
            let venus = weight * 0.91;

            let mars = weight * 0.38;
            let jupiter = weight * 2.34;
            let saturn = weight * 1.06;
            let uranus = weight * 0.92;
            let neptune = weight * 1.12;


            document.getElementById("merc").innerHTML = "Your weight on Mercury is: " + mercury;
            document.getElementById("ven").innerHTML = "Your weight on Venus is: " + venus;
            document.getElementById("ear").innerHTML = "Your weight on Earth is: " + weight;
            document.getElementById("mar").innerHTML = "Your weight on Mars is: " + mars;
            document.getElementById("jup").innerHTML = "Your weight on Jupiter is: " + jupiter;
            document.getElementById("sat").innerHTML = "Your weight on Saturn is " + saturn;
            document.getElementById("ura").innerHTML = "Your weight on Uranus is " + uranus;
            document.getElementById("nep").innerHTML = "Your weight on Neptune is " + neptune;

        }