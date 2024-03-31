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
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<h1 className="text-2xl font-bold">Archived Websites</h1>
			<ul>
				{archives.map((site, index) => (
					<li key={index} className="my-2">
						<a
							href={site.url + '/index.html'}
							className="text-blue-500 hover:underline"
						>
							{site.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
