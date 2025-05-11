import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DropdownList from './DropdownList';
const ICONS = {
  record: '/assets/icons/record.svg',
  // Other icons...
}; // Define ICONS in the current file
const Header = ({subHeader,title,userImg}: SharedHeaderProps) => {
  return (
    <div>
      <header className='header'>
        <section className='header-container'>
          <div className='details'>
            {userImg && (
              <Image 
              src={userImg || "assets/images/dummy.jpg"}
              alt={''} 
              width={66} height={66}
              className='rounded-full aspect-square'
            />
            )}
            <article>
              <p>{subHeader}</p>
              <h1>{title}</h1>
            </article>
            <aside>
              <Link href='/upload'>
                <Image src="/assets/icons/upload.svg" 
                  alt="upload" 
                  width={24} height={24} 
                  className=''
                />
                <span>Upload a video</span>
              </Link>
              <div className="record">
                <button className='primary-btn'>
                <Image src={ICONS.record}
                 alt="record" 
                 width={16} 
                 height={16}>
                 </Image>
                <span>record video</span>
              </button>
              </div>
              
              
            </aside>
            

          </div>
        </section>
        <section className='search-filter'>
          <div className='search'>
            <input type="text"
              placeholder='search for videos, tags, and creators'
            />
            <Image alt='search' 
              src="/assets/icons/search.svg" 
              width={16} height={16}

            />
            </div>
            {/* <DropdownList
            options={filterOptions}
            selectedOption={selectedFilter}
            onOptionSelect={handleFilterChange}
            triggerElement={renderFilterTrigger()}
        /> */}

        </section>
      </header>
    </div>
  )
}

export default Header
