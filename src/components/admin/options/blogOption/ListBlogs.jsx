import React from 'react'
import { useState } from 'react'
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from '@table-library/react-table-library/table';
import { Link } from 'react-router-dom';

function ListBlogs(props) {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
  
    const list = props.data;
  
    const data = {
      nodes: list.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    };
  
    return (
      <>
        <div className="m-2">
          <h1 className="text-2xl dark:text-gray-200 mb-4">Created Blogs</h1>
          <div className="p-4">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" onChange={handleSearch} />
            </div>
          </div>
  
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table data={data} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {(tableList) => (
                <>
                  <Header className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <HeaderRow>
                      <HeaderCell className="!px-6 !py-3 !bg-gray-50 dark:!bg-gray-700">#</HeaderCell>
                      <HeaderCell scope="col" className="!px-6 !py-3 !bg-gray-50 dark:!bg-gray-700">Title</HeaderCell>
                      <HeaderCell scope="col" className="!px-6 !py-3 !bg-gray-50 dark:!bg-gray-700">About</HeaderCell>
                      <HeaderCell scope="col" className="!px-6 !py-3 !bg-gray-50 dark:!bg-gray-700">Datetime</HeaderCell>
                      <HeaderCell scope="col" className="!px-6 !py-3 !bg-gray-50 dark:!bg-gray-700">Actions</HeaderCell>
                    </HeaderRow>
                    {/* id title content links datetime */}
                  </Header>
                  <Body>
                    {tableList.map((item) => (
                      <Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item.id} item={item}>
                        <Cell className="!px-6 !py-4">{item.id}</Cell>
                        <Cell className="!px-6 !py-4">{item.title}</Cell>
                        <Cell className="!px-6 !py-4">{item.about}</Cell>
                        <Cell className="!px-6 !py-4">{item.datetime}</Cell>
                        <Cell className="!px-6 !py-4">
                          <Link to={`/dashboard/blog_edit_${item.id}`} id={`Blog_${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </Cell>
                      </Row>
                    ))}
                  </Body>
                </>
              )}
            </Table>
  
          </div>
        </div >
      </>
    )
}

export default ListBlogs