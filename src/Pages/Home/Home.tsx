import { BsThreeDotsVertical } from "react-icons/bs";
import { TbPencil } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { UserType, MenuConfigType } from "../../Types";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Table, Tbody, Tfoot, User } from "./HomeStyle";
import { MenuConfig } from "./Components/MenuConfig/MenuConfig";
import Pagination from "@mui/material/Pagination";
import { Loading } from "../../Components/Loading/Loading";

const NORMAL_LIMIT = 20;
const INCREASED_LIMITE = 50;

export function Home() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<UserType[]>([]);
  const [menuConfigInfo, setMenuConfigInfo] = useState<MenuConfigType>({
    open: false,
    preferences: {
      linePerPage: "normal",
      columns: {
        user: true,
        email: true,
        client: true,
        enterprise: true,
      },
    },
  });
  const columns = menuConfigInfo.preferences.columns;

  const usersPerPage =
    menuConfigInfo.preferences.linePerPage === "normal"
      ? NORMAL_LIMIT
      : INCREASED_LIMITE;
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  const PagesNumbers = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    setLoading(true);

    api
      .get<UserType[]>(`/users`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClickToggleMenuPreferences = () => {
    setMenuConfigInfo({
      ...menuConfigInfo,
      open: !menuConfigInfo.open,
    });
  };

  return (
    <>
      <Table isLoading={loading}>
        <thead>
          <tr>
            {columns.user && <th>USUÁRIO</th>}
            {columns.email && <th>EMAIL</th>}
            {columns.client && <th>CLIENTE</th>}
            {columns.enterprise && <th>PERFIL DE ACESSO</th>}
            <th className="config">
              <BsThreeDotsVertical
                size={25}
                className="icon"
                data-testid="open-menu"
                onClick={handleClickToggleMenuPreferences}
              />
              <MenuConfig
                menuConfigInfo={menuConfigInfo}
                setMenuConfigInfo={setMenuConfigInfo}
              />
            </th>
          </tr>
        </thead>

        <Tbody isLoading={loading}>
          {loading && (
            <tr className="loading">
              <td>
                <Loading />
              </td>
            </tr>
          )}
          {currentPosts.map((user) => (
            <User key={user.id}>
              {columns.user && <td>{user.name}</td>}
              {columns.email && <td>{user.email}</td>}
              {columns.client && <td>{user.enterprise}</td>}
              {columns.enterprise && (
                <td>
                  <span className="profile">{user.profile}</span>
                </td>
              )}
              <td className="icons">
                <TbPencil size={25} color="#2a7ce8" className="icon" />
                <MdOutlineClose size={25} color="#d45" className="icon" />
              </td>
            </User>
          ))}
        </Tbody>
        <Tfoot>
          <tr>
            <td colSpan={5}>
              <Pagination
                count={PagesNumbers}
                shape="rounded"
                onChange={(event, value) => {
                  setCurrentPage(value);
                  window.scrollTo(0, 0);
                }}
              />
            </td>
          </tr>
        </Tfoot>
      </Table>
    </>
  );
}
