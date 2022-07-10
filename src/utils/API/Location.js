async function fetchAddress(zipcode = "") {
    let res = await fetch(`https://api.postalpincode.in/pincode/${zipcode}`);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}
export default fetchAddress;