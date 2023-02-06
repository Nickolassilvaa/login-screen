import { data } from "../assets/columnsData";
import * as Accordion from "@radix-ui/react-accordion";

interface props {
  title: data;
}

export function Main({ title }: props) {
  return (
    <div className="max-w-7xl w-full m-auto min-h-screen">
      <main className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 m-auto py-8 px-16">
        {title.column.map((item) => {
          return (
            <>
              <Accordion.Root
                className="AccordionRoot"
                type="single"
                defaultValue="item-1"
                collapsible
              >
                <Accordion.Item
                  className="rounded-lg overflow-hidden shadow-lg h-min"
                  value="item-1"
                >
                  <Accordion.Trigger className="bg-black text-lime-600 py-2 px-2 font-bold w-full">
                    {item.titleColumn}
                  </Accordion.Trigger>
                  <Accordion.Content>
                    {item.contentColumn.item.map((items) => {
                      return (
                        <div className="hover:bg-slate-200 px-2 py-1 cursor-pointer">
                          <a href={items.link}>{items.title}</a>
                        </div>
                      );
                    })}
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </>
          );
        })}
      </main>
    </div>
  );
}
