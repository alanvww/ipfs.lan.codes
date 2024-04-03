import { useEffect, useState } from 'react';

type Archive = {
	name: string;
	url: string;
};

function App() {
	const [archives, setArchives] = useState<Archive[]>([]);

	useEffect(() => {
		// Fetch the archives list from the public directory
		fetch('index.json')
			.then((response) => response.json())
			.then((data) => setArchives(data))
			.catch((error) => console.error('Error loading archives:', error));
	}, []);

	return (
		<div className="flex min-h-screen w-full flex-col bg-zinc-900 ">
			<h1 className="text-center text-white h-full my-4 mx-2  text-2xl font-bold">
				Archived Projects
			</h1>
			<ul className="px-[30vw]">
				{archives.map((site, index) => (
					<li
						key={index}
						className="mx-2 py-4 text-white bg-gray-500 hover:bg-gray-700 px-10 border-b-2 border-gray-700"
					>
						<a href={site.url + '/index.html'} className=" hover:underline">
							{site.name[0].toUpperCase() +
								site.name.slice(1).split('-').join(' ')}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
