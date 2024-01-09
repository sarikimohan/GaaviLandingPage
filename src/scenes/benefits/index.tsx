import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefits from "./Benefits";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "akhfkjahkflh adfa;hg;aohoiheorahkfakdhf kajhgklahdfahkdlghalhgpaihfhahkerkjabdfajdf",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "akhfkjahkflh adfa;hg;aohoiheorahkfakdhf kajhgklahdfahkdlghalhgpaihfhahkerkjabdfajdf",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "akhfkjahkflh adfa;hg;aohoiheorahkfakdhf kajhgklahdfahkdlghalhgpaihfhahkerkjabdfajdf",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildern: 0.5 },
  },
};
const index = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>

          <p className="my-5 text-sm">
            alfkah;gkah;gkha;ghadbfbak;jgak;jhg;ahgfk;abgak;bga;kbg;kajh
            alef;kahgkadnfkahd;ghaghadhadhsf;ahd;nakgkbakdgkjhadkghakdbfk;abdkfb
            ahlkhgakldgkahdkfhaklghakhgadnf.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefits
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <p>
                frj;lfha;ghlaghlahgl
                agha;lhfgl;hakgljalhkanmabfgajkdgflagdfuagefuga jhgfjagja
                ufagjfgajkegfi uageirgfadjhfgagdjhfgajgefjageifgajhjha
                jfgajgfjhajgflakgiagriugfaj
                ajgfadfiafgjahgkjhargiahiugfiauhrguiharuigiaegiagiugag
                agfjagjhakhg;aehiuagirgaiuwgeirugaiwgiariuguiahg
                aiuhkjagfkjhakafgkhakjglkahlkfgh
              </p>
              <p>
                aifuahghaiugriuagefbajbfageifaiuegiaprgiadfgkjgcbjhgiuaguiag
                adjfgajdgfjlaglfhaijbadbflfgaiurgiarigaiuew
                ajdgkjahlkjgakgdiugiua
                akhhiahglahdkauhiawehkjhiusgfjaebjagliaufgabkfg
                falkjghakgbauighairkjabjfgakghiuagjaebkjfgklahfiuaej
                ugjhfgalelfiaegwigael afjvdjfvjavf jdbfjavdfvhajvfjva
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
