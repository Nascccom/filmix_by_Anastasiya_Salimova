import style from './Header.module.css'

export const Header = () => {
    return (
      <header>
          <form>
              <input type="text" placeholder="Search" className={style.search}/>
          </form>
      </header>
    );
};
