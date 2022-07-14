import { useAppSelector } from '../hooks/redux'

export function FavouritesPage() {
    const { favourites } = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className='text-center'>No items.</p>

    const openLink = (e: string) => {
        window?.open(e)
    }

    return (
        <div className='flex justify-center pt-10 mx-auto'>
            <ul className='list-none'>
                {favourites.map(f => (
                    <li key={f}>
                        <div className='cursor-pointer' onClick={() => openLink(f)}>
                            {f}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
