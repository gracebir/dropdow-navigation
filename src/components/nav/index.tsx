import styled from 'styled-components'
import DropDown from '../dropdown';

const featuresItems = [
  {
    imgUrl: 'images/icon-todo.svg',
    itemLabel: 'Todo List'
  },
  {
    imgUrl: 'images/icon-calendar.svg',
    itemLabel: 'Calender'
  },
  {
    imgUrl: 'images/icon-reminders.svg',
    itemLabel: 'Reminder'
  },
  {
    imgUrl: 'images/icon-planning.svg',
    itemLabel: 'Planning'
  }
]

const companyItem = [
  {
    itemLabel: 'History'
  },
  {
    itemLabel: 'Our Team'
  },
  {
    itemLabel: 'Blog'
  }
]

const NavContainer = styled.nav`
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
`

const RigthNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`

const Brand = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
`;

const NavButton = styled.button`
  border: 1px solid var(--almost-black);
  padding: .6em 1em;
  border-radius: 10px;
  background-color: var(--almost-white);
  font-family: 'Epilogue', sans-serif;
  font-weight: 500;
  cursor: pointer;
`

function Nav() {
  return (
    <NavContainer>
      <LeftNav>
        <Brand>snap</Brand>
        <NavItem>
        <DropDown 
        items={featuresItems} 
        label='Features' 
        isDropdow={true}
        />
        <DropDown 
        items={companyItem} 
        label='Company' 
        isDropdow={true}
        />
        <DropDown  
        label='Careers' 
        isDropdow={false}
        />
         <DropDown 
        label='About' 
        isDropdow={false}
        />
        </NavItem>
      </LeftNav>
      <RigthNav>
      <DropDown 
        label='Login' 
        isDropdow={false}
        />
        <NavButton>
          Register
        </NavButton>
      </RigthNav>
    </NavContainer>
  )
}

export default Nav
