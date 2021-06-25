import React ,{useState} from 'react';
import ImageSearch from '../../assets/images/icons8_Search_4 3.png';
import { Dropdown } from 'react-bootstrap';
const SearchPost = () => {
    const [searchValue, setSearch] = useState('');
    return ( 
        <>
       <div className="postForm">
       <div className="container">
            <div className="row">
            <div className='col-lg-12 postForm__inputs'>
              {/* <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <input
                type='text'
                placeholder='Search'
                className='postForm__inputs__search inputstyle'
                value={searchValue}
                onChange={(e) => setSearch(e.target.value)}
                  required
              />
              <a>
                <img src={ImageSearch} className='postForm__imageSearch' />
              </a>
            </div>
            </div>

        </div>
       </div>
        </>
     );
}
 
export default SearchPost;