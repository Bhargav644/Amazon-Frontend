import "./Address";
import fetchAddress from "../../utils/API/Location";
import "../../components/Header/Header";

function getLocation() {
    try {
        var input = document.getElementById("get");
        var span1 = document.getElementById("span1");
        var span2 = document.getElementById("span2");

        fetchAddress(input.value.toString()).then(
            (json) =>
            (span2.innerText =
                json[0].PostOffice[2].Block + " " + input.value.toString())
        );
        setTimeout(() => {
            span1.innerText = "Deliver to";
        }, 1000);
    } catch (err) {
        console.log("Invalid ZipCode");
    }
}

export default getLocation;