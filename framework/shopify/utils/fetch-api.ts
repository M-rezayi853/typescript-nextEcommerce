import { ApiFetcherOptions, ApiFetcherResult } from '@common/types/api'

const fetchApi = async <T>({
  url,
  query,
  variables,
}: ApiFetcherOptions): Promise<ApiFetcherResult<T>> => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const { data, errors } = await res.json()

  // ?? is checking if left hand experssion is null or undifined => if it is go with right hand
  // || is checking if left hand experssion is null, undifined, "", 0, false => if it is go with right hand
  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data }
}

export default fetchApi
