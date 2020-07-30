exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiJobs implements Node {
      title: String
      name_job: String
      salariu_job: String
      gender: String
      varsta: String
      orele_de_munca: String
      termeni: String
      image: File
    }
  `
  createTypes(typeDefs)
}