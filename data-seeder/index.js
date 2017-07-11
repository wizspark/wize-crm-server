import leadSeeder from "./lead-seeder";
import accountSeeder from "./account-seeder";

export default async() => {
  await leadSeeder();
  await accountSeeder();
}