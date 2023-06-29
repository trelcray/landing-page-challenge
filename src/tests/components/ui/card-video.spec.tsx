import { render } from "@testing-library/react";

import { CardVideo } from "@/components/ui/card-video";

test("renders CardVideo component", () => {
  const urlImage = "/path/to/image.jpg";
  const title = "Video Title";
  const { getByText, getByAltText } = render(
    <CardVideo urlImage={urlImage} title={title} />
  );

  // Verifica se o título está presente no componente
  expect(getByText("Video Title")).toBeInTheDocument();

  // Verifica se a imagem está presente no componente
  const image = getByAltText("video thumbmail");
  expect(image).toBeInTheDocument();
});
