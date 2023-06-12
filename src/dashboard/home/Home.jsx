import React from "react";
import TopDashboard from "../topDashboard/TopDashboard";
import { Box } from "@mui/material";
import { Paragraph } from "../../ui/typography";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { sidebar } = useSelector(state => state)
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardGeneral")}
        title={t("dashboardGeneralTitle")}
      />
      <Box
        sx={{ position: "relative", top: "100px", left: `${sidebar ? "100px" : "5px"}` }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni
          corporis facilis ex earum atque illo quod ab? Nesciunt in possimus
          beatae facilis quia dolores distinctio nam ab dolor perferendis quos
          corporis molestias ad, reiciendis sequi blanditiis modi necessitatibus
          voluptate natus sint autem placeat nostrum aliquid perspiciatis.
          Deserunt, suscipit sapiente repudiandae molestias laudantium inventore
          voluptatum dolore dolorem rem recusandae consequuntur minus repellat?
          Fugiat tempore quidem placeat dignissimos voluptatum totam accusamus
          hic vitae natus vel voluptate dicta obcaecati quisquam, temporibus
          modi facilis magnam repellat. Rem sit consequatur nulla debitis minima
          nisi aperiam mollitia rerum sequi similique alias iure, officiis quia
          atque exercitationem provident. Cumque maxime, suscipit vitae magni
          quae sunt, laudantium ipsa, nulla dicta nisi assumenda. Provident
          dolore magnam natus ullam optio. Aliquid aliquam consequatur animi
          deserunt itaque illo quisquam tempora, accusantium laborum ducimus
          veniam similique dolorem porro quis delectus officia eveniet quibusdam
          possimus perspiciatis culpa dolore aperiam? Reprehenderit earum
          nesciunt, hic vel quis officia? Rem culpa ratione quaerat numquam aut
          magni aspernatur repellendus fugiat sapiente nostrum illum at quasi,
          nobis consequuntur quisquam dolores! Accusamus ullam omnis, animi
          provident possimus labore assumenda sequi dolores esse eius mollitia
          aperiam nihil tenetur laborum tempora. Itaque quod quibusdam velit
          quam ducimus? Facilis, adipisci vitae sequi hic fugiat nulla ad magnam
          iure illo necessitatibus aperiam ea culpa, quis fugit optio!
          Voluptatum cupiditate, odio maiores voluptates omnis eos aliquid? Unde
          voluptate aliquam cumque hic, nemo, rerum voluptas perferendis laborum
          repudiandae, temporibus mollitia voluptates perspiciatis. Quidem
          voluptates, inventore impedit facilis dolore at, quibusdam cupiditate
          dignissimos incidunt aut dolorum praesentium temporibus rerum
          repellendus iste pariatur reiciendis sequi voluptatibus facere id ea
          unde vero? Commodi assumenda non necessitatibus, quasi dolorum eum
          nihil enim perspiciatis perferendis odio animi tempore numquam
          asperiores nam nemo omnis temporibus quos, praesentium corporis eos
          voluptatum. Commodi minus corporis vero hic laudantium, qui aliquam
          rem quisquam provident, at sed. Odio tenetur pariatur laborum optio
          dolor repellat amet laudantium. Adipisci impedit amet ea laboriosam
          doloremque voluptatibus velit libero dolorem, nihil iste hic eligendi
          fugit quo voluptate eaque quae assumenda, distinctio quod quibusdam
          suscipit iusto iure possimus. Distinctio, explicabo, nobis expedita
          sapiente maxime veniam amet dolor harum nulla eligendi dignissimos at
          animi doloribus nam? Molestiae nisi consequatur delectus excepturi
          culpa laudantium? Iste sed officia sequi atque eveniet dignissimos
          asperiores ipsa aliquam! Tenetur laborum ipsam inventore veritatis
          totam nam deleniti unde facilis ex dolores. Magni, facere sequi
          eligendi ut cum, tempore veniam adipisci, aliquid dignissimos odio
          distinctio? Asperiores maiores soluta ratione minima quod! Asperiores
          dolor soluta, sapiente expedita in, numquam voluptate iusto corrupti
          ullam eos quis vero adipisci veniam consequuntur? Architecto, at enim
          maxime quae quaerat labore libero error, fugiat voluptatem quibusdam
          reprehenderit! Nesciunt autem omnis delectus natus at hic quae
          laudantium laboriosam iusto quas dolorum aperiam, excepturi dolores
          unde eligendi corrupti fugiat perspiciatis veritatis placeat earum?
          Ducimus ab vitae iste et consequatur soluta nesciunt recusandae. Cum
          suscipit saepe perspiciatis error. Vel velit at quia magnam dolor,
          fugiat tempore eius distinctio odit, blanditiis obcaecati saepe,
          asperiores perspiciatis laborum. Reprehenderit aperiam nulla, commodi
          repellendus quam eligendi recusandae dolorem exercitationem nisi iure
          omnis voluptatibus tenetur, enim voluptates illo magnam aliquam! Vitae
          sapiente suscipit totam! Consectetur quisquam non ut autem ab et
          possimus eius suscipit, sed libero! Eveniet, expedita. Fuga vitae
          voluptas omnis? Voluptatibus voluptatem molestiae aperiam quis
          tenetur. Ratione mollitia quam nesciunt eveniet cum vitae laborum ut
          facilis sit saepe repellendus doloribus unde corporis sunt
          exercitationem iusto aut placeat id, harum veniam quo aspernatur nemo
          similique. Sunt nemo molestiae reiciendis eveniet quisquam animi
          aliquid amet earum? Provident magni, facilis veniam qui asperiores
          ipsam, esse libero mollitia sapiente modi, delectus dolorum maxime!
          Itaque inventore est quos sunt recusandae officia sint error eveniet!
          Alias dolorum maxime illo ut pariatur! Exercitationem itaque quibusdam
          vitae provident sint amet nemo saepe assumenda ab expedita
          reprehenderit aspernatur mollitia doloremque ducimus fugit eaque
          molestiae cumque iusto at maiores, rem hic. Quisquam voluptatum vel
          harum, architecto rem dicta ex commodi id aliquam nobis repellat
          exercitationem porro minima. Delectus recusandae excepturi quos
          corporis. Perferendis aliquid deleniti laborum consectetur?
          Exercitationem error a beatae minus perspiciatis rem est vero
          reiciendis quam optio aliquam, alias rerum sapiente, eius tempora
          ducimus illum accusamus vitae consequuntur omnis sed laboriosam.
          Expedita, blanditiis vero aliquam illum voluptates nihil error ipsa
          qui? Perspiciatis velit id pariatur quas facere esse, ullam culpa at
          aliquid quae exercitationem, deleniti, sunt tempora dolorem eius
          animi? Repellendus sit ullam perferendis, earum, sint enim assumenda
          nisi consequuntur iure maiores officiis quos, aut nulla quas nam
          tempore dolorem blanditiis voluptas aspernatur voluptates hic
          corrupti? Numquam sit facere et iusto voluptatem. Quaerat, nesciunt,
          soluta eius voluptates mollitia illum ea accusamus autem fuga commodi
          deleniti dolorum repellat reprehenderit placeat eaque modi. Nam
          recusandae commodi enim soluta amet blanditiis ratione nisi vitae ex
          nesciunt sequi dolor, consectetur ullam perferendis eius? Tenetur,
          culpa. Temporibus, magni eius! Nulla assumenda doloremque
          necessitatibus dolorem beatae, quia, maxime sit recusandae qui
          reprehenderit at earum tenetur reiciendis obcaecati amet commodi
          praesentium magni provident optio repellat officiis fugit architecto!
          Eveniet similique sit quidem, officiis eligendi aperiam. Ex ullam eum
          distinctio minima officiis accusamus expedita. Exercitationem, ad
          reprehenderit! Molestiae sed iste rerum magni voluptas possimus quidem
          voluptatem recusandae facere nihil dignissimos error enim mollitia
          veniam obcaecati eveniet sunt quam necessitatibus optio quisquam, ex
          temporibus consectetur accusamus natus! Provident sequi doloribus
          sapiente dolor illo reprehenderit, pariatur architecto sint? Fuga
          expedita voluptates temporibus soluta deserunt eveniet repudiandae
          maxime necessitatibus rem nisi alias quisquam atque autem ut ab
          officia ex, omnis qui laborum nobis id facere ea ducimus. Placeat
          doloribus deleniti sequi quis sit dolores corporis explicabo magni,
          repudiandae excepturi nulla maiores cum nihil odio dignissimos.
          Necessitatibus, ratione rerum. Labore molestiae, nemo, deserunt,
          consequatur magnam ipsam recusandae facere nihil et corrupti accusamus
          aspernatur? Beatae delectus, fugit sint perspiciatis illum impedit
          quidem eius facilis quas qui maxime. Doloribus modi et blanditiis
          commodi iure voluptates saepe facilis quasi quae, libero laudantium
          eveniet sequi maxime minima, quos aliquid tenetur ducimus? Esse
          tempora, dolor deleniti doloribus autem quis placeat totam? Deserunt
          commodi, soluta, fuga illum omnis facere iusto unde optio ipsum odio
          officia perferendis ipsa quos ut quibusdam laudantium quasi cum
          suscipit tempore.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default Home;
