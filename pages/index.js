import Layout from "../components/layout"
import Social from "../components/social"

function HomePage() {
    return (
        <Layout>
            <div className='home'>
                <img src="/me.png" alt="" />
                <h5>Frontend Developer</h5>
                <h4>Hakkımda</h4>
                <p>
                Merhaba ben Yılmaz. Bilecik Üniversitesi Yönetim Bilişim Sistemleri bölümünden Haziran 2020'de mezun oldum. Frontend developer olarak bir kariyer hedefliyorum. Okul süresince derslerle sınırlı kalmayıp projeler geliştirmeye ve birçok yeni teknoloji öğrenmeye çalıştım. React, React Native, Vue gibi teknolojileri deneyimledim. Kendimi en çok React kullanarak geliştirdiğim projelerde rahat hissediyorum. Bana dair birçok bilgiye bu web sitesinden ulaşabilirsiniz.
                </p>
                <Social />
            </div>
        
        </Layout>
    )
  }
  
export default HomePage