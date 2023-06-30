import {sp} from "@pnp/sp"

const siteUrl =
  "https://yzx43.sharepoint.com/sites/FamilyTree/Avatars/Forms/AllItems.aspx";
const clientId = "ad49f614-f09c-4277-b64e-944ee7a99b8b";
const clientSecret = "369c3f7e-e548-4390-ac48-1ead509affb5";
const tenantId = "dac9416a-9e83-49e0-9b93-0a118da19b7b";

sp.setup({
  sp: {
    baseUrl: siteUrl,
    headers: {
      Accept: "application/json;odata=verbose",
      "Content-Type": "application/json;odata=verbose",
      odata: "verbose",
    },
  },
  graph: {
    clientId: clientId,
    clientSecret: clientSecret,
    tenantId: tenantId,
  },
});

sp.web.get().then((res)=>{
  console.log("connected")
}).catch(err=>{
  console.log(err)
});