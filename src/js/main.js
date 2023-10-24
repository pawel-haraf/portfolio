const username = 'pawel-haraf'
const direction = 'desc'
const repositoriesContainer = document.querySelector('.repositories--js')
console.log(repositoriesContainer)

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
	.then(response => response.json())
	.then(response => {
		for (let repository of response) {
			const { name, stargazers_count, description, homepage, html_url } = repository
			const element = `
            <div class="bg-gray-800 rounded-2xl max-w-[648px]">
                    <div class="bg-white/[.15] flex items-center gap-2 p-4 shadow-inner group rounded-t-2xl border-b
                        border-b-bgBody">
                        <span class="rounded-md bg-bgBody w-3 h-3 group-hover:bg-red-500"> </span>
                        <span class="rounded-md bg-bgBody w-3 h-3"> </span>
                        <span class="rounded-md bg-bgBody w-3 h-3 group-hover:bg-green-500"> </span>
                    </div>
                    <div class="m-5 md:m-10">
                        <div class="flex gap-4 items-center mb-4">
                            <h3 class="text-2xl font-bold">${name}</h3>
                            <div class="flex gap-0.5 items-center px-2 py-1 bg-gray-400/10 text-gray-400">
                                <img src="./img/star-01.png" alt="">
                                <p class="text-base">${stargazers_count}</p>
                            </div>
                        </div>

                        <p class="text-xl">
                        ${description}
                        </p>
                        <div class="flex gap-2 mt-4 mb-10">
                            <p class="bg-gray-400/10 px-2 py-1 text-white font-bold text-sm rounded ">HTML</p>
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 text-base whitespace-nowrap">
                            <a href="${homepage}"
                                class="flex gap-2 bg-bgBody w-40 md:w-auto px-5 py-4 rounded-xl text-logo md:text-xl font-bold" target="_blank" rel="noopener noreferrer">
                                <img src="./img/demo.png" alt="">
                                <p>View demo</p>
                            </a>
                            <a href="${html_url}"
                                class="flex gap-2 bg-bgBody w-44 md:w-auto px-5 py-4 rounded-xl text-logo md:text-xl font-bold" target="_blank" rel="noopener noreferrer">
                                <img src="./img/github.png" alt="" >
                                <p>Source code</p>
                            </a>
                        </div>
                    </div>
                </div>
            `
			repositoriesContainer.insertAdjacentHTML('beforeend', element)
		}
	})
	.catch(e => console.log(e))
