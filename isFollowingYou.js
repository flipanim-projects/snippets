/* Shows on their profile whether a user is following you or not.
   This script fetches directly from the /followed page every time */
(async () => {
    if (!document.querySelector("[href=\"profile\"]")) return; // run only if logged in
    if (!window.location.href.includes("profile?name")) return; // run only on profiles 
    if (document.querySelector("[value=\"Restore default avatar\"]")) return; // don't run if it's your own profile
    
    let followsYou = await getFollowsYou();

    const currentUserName = document.querySelector(".profileAvatar>.text_normal").innerText; // what profile you're on
    const profileContainer = document.querySelector(".profileAvatar");
    if (!followsYou.includes(currentUserName))
        profileContainer.insertAdjacentHTML('beforeend', `<small style="font-family: Quicksand; text-align: center; display: block"><i>Does not follow you</i></small>`);
    else 
       profileContainer.insertAdjacentHTML('beforeend', `<small style="font-family: Quicksand; text-align: center; display: block"><i>Follows you</i></small>`)

    async function getFollowsYou() {
        const response = await fetch("https://flipanim.com/followed");
        let html = await response.text();
        html = html.slice(html.indexOf("Follows you"), html.indexOf("gdprInfo"));
        // Convert the raw HTML text into actual HTML we can grab stuff from
        const div = document.createElement("div");
        div.innerHTML = html;
        // convert every profile link to a list of usernames
        const followsYou = Array.from(div.querySelectorAll("a")).map(a => a.innerText);
        return followsYou;
    }
})();
