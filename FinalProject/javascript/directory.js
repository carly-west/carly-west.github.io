fetch('data.json')
    .then(response => {
        return response.json();
    }).then(jsObject => {
        console.log(jsObject);
        // Alpha coffee d1
        document.getElementById('d1-name').textContent = jsObject.alpha.name;
        document.getElementById('d1-address').textContent = jsObject.alpha.address;
        document.getElementById('d1-phone').textContent = jsObject.alpha.phone;
        document.getElementById('d1-link').textContent = jsObject.alpha.link;

        // Blackstone d2
        document.getElementById('d2-name').textContent = jsObject.blackstone.name;
        document.getElementById('d2-address').textContent = jsObject.blackstone.address;
        document.getElementById('d2-phone').textContent = jsObject.blackstone.phone;
        document.getElementById('d2-link').textContent = jsObject.blackstone.link;

        // Cancun d3
        document.getElementById('d3-name').textContent = jsObject.cancun.name;
        document.getElementById('d3-address').textContent = jsObject.cancun.address;
        document.getElementById('d3-phone').textContent = jsObject.cancun.phone;
        document.getElementById('d3-link').textContent = jsObject.cancun.link;

        // Healthy Pets d4
        document.getElementById('d4-name').textContent = jsObject.healthy.name;
        document.getElementById('d4-address').textContent = jsObject.healthy.address;
        document.getElementById('d4-phone').textContent = jsObject.healthy.phone;
        document.getElementById('d4-link').textContent = jsObject.healthy.link;

        // Pizzeria d5
        document.getElementById('d5-name').textContent = jsObject.pizzeria.name;
        document.getElementById('d5-address').textContent = jsObject.pizzeria.address;
        document.getElementById('d5-phone').textContent = jsObject.pizzeria.phone;
        document.getElementById('d5-link').textContent = jsObject.pizzeria.link;

        // Soulstice d6
        document.getElementById('d6-name').textContent = jsObject.soulstice.name;
        document.getElementById('d6-address').textContent = jsObject.soulstice.address;
        document.getElementById('d6-phone').textContent = jsObject.soulstice.phone;
        document.getElementById('d6-link').textContent = jsObject.soulstice.link;

        // Title Boxing d7
        document.getElementById('d7-name').textContent = jsObject.titleboxing.name;
        document.getElementById('d7-address').textContent = jsObject.titleboxing.address;
        document.getElementById('d7-phone').textContent = jsObject.titleboxing.phone;
        document.getElementById('d7-link').textContent = jsObject.titleboxing.link;
    });

