import PropTypes from 'prop-types'

export const Header = ({ currentTheme, onThemeChange }) => {
  return (
    <header className='flex justify-between gap-4 text-xs'>
      <div className='flex w-[85%] items-end justify-between text-[var(--text-specific)]'>
        <h1>calc</h1>
        <p>THEME</p>
      </div>
      <div className='flex flex-col text-[var(--text-specific)]'>
        <div className='flex justify-around p-[.1rem]'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div
          onClick={onThemeChange}
          className='toggle relative h-6 w-16 cursor-pointer rounded-full bg-[var(--toggle-bg)]'
        >
          <div
            className='toggle-thumb ease absolute left-2 top-1/2 h-4 w-4 rounded-full bg-[var(--key-bg-special)] transition-transform duration-300'
            style={{
              transform: `translateX(${currentTheme * 100}%) translateY(-50%)`
            }}
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  currentTheme: PropTypes.number.isRequired,
  onThemeChange: PropTypes.func.isRequired
}
