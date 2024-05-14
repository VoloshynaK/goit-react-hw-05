

export default function SearchBar ({onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name='movieName' placeholder='Enter the title to search' autoComplete="off" autoFocus pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required />
            <button type='submit' >Search</button>
        </form>
    )
}