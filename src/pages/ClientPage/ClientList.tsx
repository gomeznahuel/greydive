import { Data } from '../../types'
import { ClientRender } from './ClientRender'

export const ClientList = ({ data}: { data: Data[] }) => {
  return (
    <>
      {data.length > 0 ? ( data.map((item) => <ClientRender key={item.cliente} item={item} />) ) : ( <p>No hay datos</p> )}
    </>
  )
}
