import {
	ApolloLink,
	Operation,
	NextLink,
	Observable,
	FetchResult,
} from '@apollo/client'

class ClientSide extends ApolloLink {
	request(operation: Operation, forward?: NextLink): Observable<any> | null {
		if (true) {
			return forward(operation)
		}

		return new Observable((observer) => {

		})
	}
}

export default ClientSide
