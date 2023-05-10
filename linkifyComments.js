/* Flipanim Snippet: Makes every link in comments clickable */
(function() {
    if (!window.location.pathname.includes("anim=")) return; // run only on anim pages

    const comments = document.querySelectorAll('.commentText');
    for (const comment of comments) {
        let linkified = linkify(comment.innerHTML)
        comment.innerHTML = ``;    // erase comment content
        comment.append(linkified); // and set it to the linkified version instead
    }

    function linkify(inputText) {
        // RegEx pattern to match URLs starting with http://, https://, or ftp://
        var httpReplacePattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        // list of links found in the text
        let links = inputText.match(httpReplacePattern);
        if (!links) return inputText;

        const textNode = document.createDocumentFragment();
        const textWithoutLinks = inputText.split(httpReplacePattern);
        // insert a clickable link in place of each link
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
