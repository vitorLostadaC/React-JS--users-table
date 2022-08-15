import { Contaienr, Option } from "./MenuConfigStyled";
import { MenuConfigType } from "../../../../Types/index";
import { BsCheckLg } from "react-icons/bs";
import produce from "immer";

interface Props {
  menuConfigInfo: MenuConfigType;
  setMenuConfigInfo: React.Dispatch<React.SetStateAction<MenuConfigType>>;
}

interface ColumnType {
  optionName: string;
  checkedConditional: boolean;
  value: "user" | "email" | "client" | "enterprise";
}

export function MenuConfig({ menuConfigInfo, setMenuConfigInfo }: Props) {
  const LINE_PER_PAGE = [
    {
      optionName: "Padrão",
      value: "normal",
      checkedConditional: menuConfigInfo.preferences.linePerPage === "normal",
    },
    {
      optionName: "50 linhas",
      value: "increased",
      checkedConditional:
        menuConfigInfo.preferences.linePerPage === "increased",
    },
  ];

  const COLUMNS: ColumnType[] = [
    {
      optionName: "Usuário",
      value: "user",
      checkedConditional: menuConfigInfo.preferences.columns.user,
    },
    {
      optionName: "E-mail",
      value: "email",
      checkedConditional: menuConfigInfo.preferences.columns.email,
    },
    {
      optionName: "Cliente",
      value: "client",
      checkedConditional: menuConfigInfo.preferences.columns.client,
    },
    {
      optionName: "Perfil de acesso",
      value: "enterprise",
      checkedConditional: menuConfigInfo.preferences.columns.enterprise,
    },
  ];

  const handleToggleCheckboxLinePerPage = (name: string) => {
    setMenuConfigInfo(
      produce(menuConfigInfo, (draft) => {
        draft.preferences.linePerPage =
          name === "normal" ? "normal" : "increased";
      })
    );
  };

  const handleToggleCheckboxColumns = (
    name: "user" | "email" | "client" | "enterprise"
  ) => {
    setMenuConfigInfo(
      produce(menuConfigInfo, (draft) => {
        draft.preferences.columns[name] =
          !menuConfigInfo.preferences.columns[name];
      })
    );
  };

  if (!menuConfigInfo.open) return <></>;

  return (
    <Contaienr>
      <section>
        <header>Linhas por páginas</header>
        <div>
          {LINE_PER_PAGE.map((option) => (
            <Option key={option.value} checked={option.checkedConditional}>
              <button>
                <BsCheckLg
                  size={10}
                  color="#fff"
                  onClick={() => handleToggleCheckboxLinePerPage(option.value)}
                />
              </button>
              <span>{option.optionName}</span>
            </Option>
          ))}
        </div>
      </section>
      <hr />
      <section>
        <header>Colunas</header>
        <div>
          {COLUMNS.map((option) => (
            <Option key={option.value} checked={option.checkedConditional}>
              <button>
                <BsCheckLg
                  size={10}
                  color="#fff"
                  onClick={() => handleToggleCheckboxColumns(option.value)}
                />
              </button>
              <span>{option.optionName}</span>
            </Option>
          ))}
        </div>
      </section>
    </Contaienr>
  );
}
