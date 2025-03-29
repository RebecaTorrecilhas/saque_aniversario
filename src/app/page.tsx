import Card from "@/components/card/card";
import TextFgtsCard from "@/components/text-fgts-card/text-fgts-card";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import Form from "@/components/form/form";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className="container">
        <TextFgtsCard
          title="Use uma grana que já é sua e saia do aperto."
        />

        <Card size="card-lg">
          <Form />
        </Card>
      </main>
    </div>
  );
}
