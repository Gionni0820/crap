async function loadEASFeed() {
    const feed = document.getElementById("eas-feed");

    try {
        const response = await fetch(
            "https://tv.gionni0820.com/feeds/eas.xml"
        );

        if (!response.ok) {
            throw new Error("Unable to load RSS feed");
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        if (xml.querySelector("parsererror")) {
            throw new Error("Invalid RSS XML");
        }

        const items = xml.querySelectorAll("item");

        feed.textContent = "";

        // Display the latest 5 captures
        items.forEach((item, index) => {
            if (index >= 5) return;

            const title = item.querySelector("title")?.textContent;
            const link = item.querySelector("link")?.textContent;

            if (!title || !link) return;

            const a = document.createElement("a");
            a.href = link.trim();
            a.textContent = title;
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            feed.appendChild(a);
            feed.appendChild(document.createElement("br"));
        });

        if (!feed.childNodes.length) {
            feed.textContent = "No EAS captures available.";
        }

    } catch (error) {
        feed.textContent = "Unable to load EAS captures.";
        console.error("EAS RSS Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadEASFeed);
