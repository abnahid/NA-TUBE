const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err));
};
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);

    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class="h-[200px] relative">
            <img
            src=${video.thumbnail}
            class="h-full w-full object-cover"
            alt="Shoes" />

            <span class="absolute bottom-2 right-2 bg-black rounded p-1 text-white">${
              video.others.posted_date
            }</span>
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src="${
                  video.authors[0].profile_picture
                }" />
            </div>

            <div>
                <h2 class"font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-400">${
                      video.authors[0].profile_name
                    }</p>
                    ${
                      video.authors[0].verified
                        ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>`
                        : ""
                    }
                
                </div>

                <p></p>
            </div>
        </div>
    `;

    videoContainer.append(card);
  });
};

const displayCatagories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    categoryContainer.append(button);
  });
};

loadCatagories();
loadVideos();
