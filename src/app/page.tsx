"use client"
import { decrement, increment } from "../redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { useGetUsersQuery, useGetUserByIdQuery } from '../redux/services/userApi'
function HomePage() {

  const count = useAppSelector(state => state. CounterReducer.counter)
  const {data, error, isLoading, isFetching} = useGetUsersQuery(null)

  if(isLoading || isFetching) return <p>loading...</p>
  if(error) return <p>Some error</p>
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>
        total: {count}
      </h1>
      <button onClick={() => {
        dispatch(increment())
      }}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Increment
      </button>
      <br/>
      <button onClick={() => {
        dispatch(decrement())
      }}
      className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Decrement
      </button>
      {
        data?.map(user => (
          <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage
