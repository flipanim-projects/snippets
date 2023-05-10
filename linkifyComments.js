/* Flipanim Snippet: Makes every link in comments clickable */
(function() {
    if (!window.location.pathname.includes("anim=")) return; // run only on anim pages

    const comments = document.querySelectorAll('.commentText');
    for (const comment of comments) {
        let linkified = linkify(comment.innerHTML)
        comment.innerHTML = ``;
        comment.append(linkified);
    }

    function linkify(inputText) {
        // URLs starting with http://, https://, or ftp://
        var httpReplacePattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        let links = inputText.match(httpReplacePattern);
        if (!links) return inputText;

        const textNode = document.createDocumentFragment();
        const textWithoutLinks = inputText.split(httpReplacePattern);

        for (const [i, link] of links.entries()) {
            const linkElement = document.createElement("a");
            linkElement.href = link;
            linkElement.innerText = link;
            linkElement.setAttribute("target", "_blank")
            textNode.append(textWithoutLinks[i], linkElement)
        }

        return textNode
    }
})()
