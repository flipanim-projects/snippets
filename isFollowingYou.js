/* Shows on their profile whether a user is following you or not.
   This script fetches directly from the /followed page every time */
(async () => {
    if (!window.location.href.includes("profile?name")) return; // run only on profiles other than yours

    let followsYou = await getFollowsYou();

    const currentUserName = document.querySelector(".profileAvatar>.text_normal").innerText;
    const profileContainer = document.querySelector(".profileAvatar");
    if (!followsYou.includes(currentUserName))
        profileContainer.insertAdjacentHTML('beforeend', `<small style="font-family: Quicksand; text-align: center; display: block"><i>Does not follow you</i></small>`);
    else profileContainer.insertAdjacentHTML('beforeend', `<small style="font-family: Quicksand; text-align: center; display: block"><i>Follows you</i></small>`)

    async function getFollowsYou() {
        console.log("wahoo")
        const response = await fetch("https://flipanim.com/followed");
        let html = await response.text();
        html = html.slice(html.indexOf("Follows you"), html.indexOf("gdprInfo"));

        const div = document.createElement("div");
        div.innerHTML = html;
        const followsYou = Array.from(div.querySelectorAll("a")).map(a => a.innerText);
        return followsYou;
    }
})()
