document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const toggle = document.getElementById('userRoleToggle');
    const participantView = document.getElementById('participantView');
    const hostView = document.getElementById('hostView');
    const toggleLabel = document.querySelector('.toggle-label');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Add logic here to load content based on the data-view attribute
            const view = button.getAttribute('data-view');
            console.log(`Navigating to: ${view}`);
            // You can add logic to load different content based on the view here.
        });
    });

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            // Host View
            participantView.style.display = 'none';
            hostView.style.display = 'block';
            toggleLabel.textContent = 'Host';
        } else {
            // Participant View
            hostView.style.display = 'none';
            participantView.style.display = 'block';
            toggleLabel.textContent = 'Participant';
        }
    });

    // Zoom and Fullscreen Functionality (Conceptual)
    const zoomInButton = document.querySelector('.zoom-button:nth-child(1)');
    const zoomOutButton = document.querySelector('.zoom-button:nth-child(2)');
    const fullscreenButton = document.querySelector('.fullscreen-button');
    const mainContent = document.querySelector('main');

    let zoomLevel = 1;

    zoomInButton.addEventListener('click', () => {
        zoomLevel += 0.1;
        mainContent.style.transform = `scale(${zoomLevel})`;
    });

    zoomOutButton.addEventListener('click', () => {
        if (zoomLevel > 0.2) {
            zoomLevel -= 0.1;
            mainContent.style.transform = `scale(${zoomLevel})`;
        }
    });

    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            mainContent.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Example of handling the "+ New" button click
    const newEventButton = document.querySelector('.new-event-button');
    newEventButton.addEventListener('click', () => {
        console.log('Creating a new event...');
        // Add logic to open a modal or navigate to a new page to create an event.
    });

    // Example of handling metric card clicks (conceptual)
    const activeEventsCard = document.getElementById('active-events');
    const totalVolunteersCard = document.getElementById('total-volunteers');
    const capacityCard = document.getElementById('capacity');

    activeEventsCard.addEventListener('click', () => {
        console.log('Viewing details for active events...');
        // Add logic to show details for active events.
    });

    totalVolunteersCard.addEventListener('click', () => {
        console.log('Viewing details for total volunteers...');
        // Add logic to show details for total volunteers.
    });

    capacityCard.addEventListener('click', () => {
        console.log('Viewing details for capacity...');
        // Add logic to show details for capacity.
    });
});