import { useEffect, useContext } from "react";
import { UserContext } from "contexts/User";
import { Body, Head } from "components/User/Table";
import Options from "components/User/Options";
import { Error, Spinner } from "components/Common";

const ERROR_MESSAGES = {
	FETCH: "Sorry, we could not load the page you requested. Please try again later",
	SEARCH: "Sorry, no user found with such name. Try again with different name"
};

const Table = () => {
	const context = useContext(UserContext);
	const { states, actions } = context;

	useEffect(() => {
		actions.getData();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center mt-10">
			<button
				type="button"
				id="user-action-refresh"
				className="bg-primary text-white py-3 font-primary rounded-md px-6 font-bold hover:bg-[#da5b7f]"
				onClick={actions.getData}
				disabled={states.isLoading}
			>
				Refresh
				<i className="ml-3 fa-solid fa-arrows-rotate"></i>
			</button>

			<div className="flex flex-col items-center justify-center w-9/12 mt-6 user-table h-fit">
				<Options/>

				<table className="w-full mx-2 my-4 table-auto font-primary">
					<Head/>

					<tbody>
						{states.isLoading &&
					<tr>
						<td colSpan="100%" align="center">
							 <Spinner />
						</td>
					</tr>
						}

						{states.hasError &&
					<tr>
						<td colSpan="100%" align="center">
							 <Error message = {ERROR_MESSAGES.FETCH} />
						</td>
					</tr>
						}

						{states.hasSearchError &&
					<tr>
						<td colSpan="100%" align="center">
							 <Error message = {ERROR_MESSAGES.SEARCH} />
						</td>
					</tr>
						}

						{states.userData &&
						states.userData.map((data) => (
							<Body data={data} key={data.login.uuid} />
						))
						}

					</tbody>
				</table>
			</div>

		</div>
	);
};

export default Table;