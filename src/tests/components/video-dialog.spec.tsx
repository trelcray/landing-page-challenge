import { render } from "@testing-library/react";

import { VideoDialog } from "@/components/video-dialog";

describe("VideoDialog Component", () => {
  test("renders the video dialog component with data", () => {
    const visibleResults = [
      {
        id: 1,
        videoUrl: "https://www.youtube.com/watch?v=8EKTUhF7yA8",
        imageUrl: "/thumbnail.png",
        title: "Tendências de Marketing para 2024!",
        description:
          "Veja como a Leadster define suas metas e conheça novas estratégias para testar em 2024.",
        category: "Marketing Digital",
        publishedAt: "2022-11-12",
      },
      {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=a89Htfx0YKo",
        imageUrl: "/leads.png",
        title: "Como usar o ChatGPT para gerar mais Leads Qualificados",
        description:
          "Conheça a nova funcionalidade da Leadster + ChatGPT e descubra como essa tecnologia irá transformar o Marketing.",
        category: "Geração de Leads",
        publishedAt: "2022-06-01",
      },
    ];

    const { getByText } = render(
      <VideoDialog visibleResults={visibleResults} />
    );

    expect(getByText("Tendências de Marketing para 2024!")).toBeInTheDocument();
    expect(
      getByText("Como usar o ChatGPT para gerar mais Leads Qualificados")
    ).toBeInTheDocument();
  });
});
