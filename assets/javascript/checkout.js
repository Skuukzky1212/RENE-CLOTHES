
// load city and district data 
const myObj =
{
    init: function () {
        this.load_data();
    },
    load_data: function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://provinces.open-api.vn/api/?depth=2', true);
        xhr.onload = function () {
            const cities = JSON.parse(xhr.responseText);
            // console.log(cities);
            cities.forEach(function (city) {
                const container = document.createElement('div');
                container.setAttribute('class', 'container__checkout-info-option');

                const input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('class', 'radio');
                input.id = 'city' + city.code;
                input.setAttribute('name', 'category-info');

                const label = document.createElement('label');
                label.innerText = city.name;
                label.setAttribute('for', input.id);
                container.appendChild(input);
                container.appendChild(label);
                document.getElementById('city').appendChild(container);


                container.addEventListener('click', function () {
                    const districts = city.districts;
                    console.log(districts);
                    document.getElementById('district').innerHTML = "";
                    districts.forEach(function (district) {
                        const container = document.createElement('div');
                        container.setAttribute('class', 'container__checkout-info-option');

                        const input = document.createElement('input');
                        input.setAttribute('type', 'radio');
                        input.setAttribute('class', 'radio');
                        input.id = 'district' + district.code;
                        input.setAttribute('name', 'category-info');

                        const label = document.createElement('label');
                        label.innerText = district.name;
                        label.setAttribute('for', input.id);

                        container.appendChild(input);
                        container.appendChild(label);
                        document.getElementById('district').appendChild(container);
                    });
                });
                // js for search box
                const selectedAll = document.querySelectorAll(".container__checkout-info-selected");
                selectedAll.forEach(function (selected) {
                    const optionsContainer = selected.previousElementSibling;
                    const searchBox = selected.nextElementSibling;
                    const optionsList = optionsContainer.querySelectorAll(".container__checkout-info-option");

                    selected.addEventListener("click", function () {
                        if (optionsContainer.classList.contains("active")) {
                            optionsContainer.classList.remove("active");
                        } else {
                            let currentActive = document.querySelector(".container__checkout-info-options-container.active");

                            if (currentActive) {
                                currentActive.classList.remove("active");
                            }

                            optionsContainer.classList.add("active");
                        }
                        searchBox.value = "";
                        filterList("");
                        if (optionsContainer.classList.contains("active")) {
                            searchBox.focus();
                        }
                    });

                    optionsList.forEach(function (o) {
                        o.addEventListener("click", function () {
                            selected.innerHTML = o.querySelector("label").innerHTML;
                            o.querySelector("input").checked = true;
                            optionsContainer.classList.remove("active");
                        });
                    });

                    searchBox.addEventListener("keyup", function (e) {
                        filterList(e.target.value);
                    });

                    const filterList = function (searchTerm) {
                        searchTerm = searchTerm.toLowerCase();
                        optionsList.forEach(function (option) {
                            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
                            if (label.indexOf(searchTerm) !== -1) {
                                option.style.display = "block";
                            } else {
                                option.style.display = "none";
                            }
                        });
                    };
                });

            });
        }
        xhr.send();
    }
};
myObj.init();
