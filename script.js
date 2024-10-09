const breedDropdown = document.getElementById("breed-dropdown");
const subBreedDropdown = document.getElementById("sub-breed-dropdown");
const dogImage = document.getElementById("dog-image");

fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
        const breeds = Object.keys(data.message);
        breeds.forEach((breed) => {
            const option = document.createElement("option");
            option.value = breed;
            option.textContent = breed;
            breedDropdown.appendChild(option);
        });
    })
    .catch((error) => {
        console.error("Error fetching the breed list: " + error);
    });

breedDropdown.addEventListener("change", (event) => {
    const selectedBreed = event.target.value;
    dogImage.innerHTML = "";

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then((response) => response.json())
        .then((data) => {
            displayImage(data.message);
        });

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/list`)
        .then((response) => response.json())
        .then((data) => {
            subBreedDropdown.innerHTML = '<option>Select a sub-breed</option>';
            subBreedDropdown.disabled = false;

            if (data.message.length === 0) {
                subBreedDropdown.disabled = true;
            } else {
                data.message.forEach((subBreed) => {
                    const option = document.createElement("option");
                    option.value = subBreed;
                    option.textContent = subBreed;
                    subBreedDropdown.appendChild(option);
                });
            }
        })
        .catch((error) => {
            console.error("Error fetching the sub-breed list: " + error);
        });
});

subBreedDropdown.addEventListener("change", (event) => {
    const selectedSubBreed = event.target.value;
    const selectedBreed = breedDropdown.value;

    if (selectedSubBreed !== "Select a sub-breed") {
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/${selectedSubBreed}/images/random`)
            .then((response) => response.json())
            .then((data) => {
                displayImage(data.message);
            })
            .catch((error) => {
                console.error("Error fetching the sub-breed image: " + error);
            });
    }
});

function displayImage(imageUrl) {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.style.maxWidth = "300px";
    image.style.maxHeight = "300px";

    dogImage.innerHTML = "";
    dogImage.appendChild(image);
}
