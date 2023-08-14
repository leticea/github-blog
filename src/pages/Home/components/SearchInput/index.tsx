import * as z from "zod";
import { SearchInputContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchInput() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchPosts(data: SearchFormInput) {
    console.log(data);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}
